package com.ismartcoding.plain.ui.models

import android.content.Context
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.toMutableStateList
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewmodel.compose.saveable
import com.ismartcoding.plain.data.DAudio
import com.ismartcoding.plain.data.DMediaBucket
import com.ismartcoding.plain.db.DTag
import com.ismartcoding.plain.enums.DataType
import com.ismartcoding.plain.features.TagHelper
import com.ismartcoding.plain.features.media.AudioMediaStoreHelper
import com.ismartcoding.plain.features.file.FileSortBy
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update

@OptIn(androidx.lifecycle.viewmodel.compose.SavedStateHandleSaveableApi::class)
class AudioViewModel(private val savedStateHandle: SavedStateHandle) : ISelectableViewModel<DAudio>, ViewModel() {
    private val _itemsFlow = MutableStateFlow(mutableStateListOf<DAudio>())
    override val itemsFlow: StateFlow<List<DAudio>> get() = _itemsFlow
    var showLoading = mutableStateOf(true)
    var offset = mutableIntStateOf(0)
    var limit = mutableIntStateOf(50)
    var noMore = mutableStateOf(false)
    var trash = mutableStateOf(false)
    var total = mutableIntStateOf(0)
    var tag = mutableStateOf<DTag?>(null)
    var bucket = mutableStateOf<DMediaBucket?>(null)
    val dataType = DataType.AUDIO
    var queryText by savedStateHandle.saveable { mutableStateOf("") }
    var search = mutableStateOf(false)
    var selectedItem = mutableStateOf<DAudio?>(null)
    val sortBy = mutableStateOf(FileSortBy.DATE_DESC)

    override var selectMode = mutableStateOf(false)
    override val selectedIds = mutableStateListOf<String>()

    suspend fun moreAsync(context: Context, tagsViewModel: TagsViewModel) {
        offset.value += limit.intValue
        val items = AudioMediaStoreHelper.searchAsync(context, getQuery(), limit.intValue, offset.intValue, sortBy.value)
        _itemsFlow.update {
            val mutableList = it.toMutableStateList()
            mutableList.addAll(items)
            mutableList
        }
        tagsViewModel.loadMoreAsync(items.map { it.id }.toSet())
        showLoading.value = false
        noMore.value = items.size < limit.intValue
    }

    suspend fun loadAsync(context: Context, tagsViewModel: TagsViewModel) {
        offset.intValue = 0
        _itemsFlow.value = AudioMediaStoreHelper.searchAsync(context, getQuery(), limit.intValue, offset.intValue, sortBy.value).toMutableStateList()
        tagsViewModel.loadAsync(_itemsFlow.value.map { it.id }.toSet())
        total.intValue = AudioMediaStoreHelper.countAsync(context, getTotalQuery())
        noMore.value = _itemsFlow.value.size < limit.value
        showLoading.value = false
    }

    fun trash(ids: Set<String>) {
    }

    fun restore(ids: Set<String>) {

    }

    fun delete(ids: Set<String>) {

    }

    private fun getTotalQuery(): String {
        return "trash:false"
    }

    private fun getTrashQuery(): String {
        return "trash:true"
    }

    private fun getQuery(): String {
        var query = "$queryText trash:${trash.value}"
        if (tag.value != null) {
            val tagId = tag.value!!.id
            val ids = TagHelper.getKeysByTagId(tagId)
            query += " ids:${ids.joinToString(",")}"
        }

        if (bucket.value != null) {
            query += " bucket_id:${bucket.value!!.id}"
        }

        return query
    }

}
