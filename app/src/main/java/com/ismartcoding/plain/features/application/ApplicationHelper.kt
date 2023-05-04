package com.ismartcoding.plain.features.application

import android.content.Context
import android.content.Intent
import android.content.pm.ApplicationInfo
import android.net.Uri
import com.ismartcoding.lib.helpers.SearchHelper
import com.ismartcoding.plain.packageManager
import kotlinx.datetime.Instant
import java.io.File

object ApplicationHelper {
    private val appLabelCache: MutableMap<String, String> = HashMap()

    fun search(query: String, limit: Int, offset: Int): List<DApplication> {
        val packages = packageManager.getInstalledPackages(0)
        val apps = mutableListOf<DApplication>()
        var type = ""
        var text = ""
        if (query.isNotEmpty()) {
            val queryGroups = SearchHelper.parse(query)
            var t = queryGroups.find { it.name == "type" }
            if (t != null) {
                type = t.value
            }
            t = queryGroups.find { it.name == "text" }
            if (t != null) {
                text = t.value
            }
        }

        packages.forEach { app ->
            val packageInfo = packageManager.getApplicationInfo(app.packageName, 0)
            val file = File(packageInfo.publicSourceDir)
            val isSystemApp = packageInfo.flags and ApplicationInfo.FLAG_SYSTEM != 0
            val appType = if (isSystemApp) "system" else "user"
            if (type.isNotEmpty() && appType != type) {
                return@forEach
            }

            apps.add(
                DApplication(
                    packageInfo.packageName,
                    getLabel(packageInfo),
                    appType,
                    app.versionName,
                    packageInfo.sourceDir,
                    file.length(),
                    Instant.fromEpochMilliseconds(app.firstInstallTime),
                    Instant.fromEpochMilliseconds(app.lastUpdateTime),
                )
            )
        }

        return apps.filter { text.isEmpty() || it.name.contains(text, true) || it.id.contains(text, true) }.drop(offset).take(limit)
    }

    fun count(query: String): Int {
        return search(query, Int.MAX_VALUE, 0).count()
    }

    private fun getLabel(packageInfo: ApplicationInfo): String {
        val key = packageInfo.packageName
        if (!appLabelCache.containsKey(key)) {
            appLabelCache[key] = packageInfo.loadLabel(packageManager).toString()
        }

        return appLabelCache[key] ?: ""
    }

    fun uninstall(context: Context, packageName: String) {
        context.startActivity(Intent(Intent.ACTION_DELETE, Uri.parse("package:$packageName")))
    }
}