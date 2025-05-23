package com.ismartcoding.plain.ui.nav

import kotlinx.serialization.Serializable

class Routing {
    @Serializable
    object Home

    @Serializable
    object Settings

    @Serializable
    object Language

    @Serializable
    object ColorAndStyle

    @Serializable
    object DarkTheme

    @Serializable
    object BackupRestore

    @Serializable
    object About

    @Serializable
    object WebSettings

    @Serializable
    object WebSecurity

    @Serializable
    object WebLearnMore

    @Serializable
    object Text

    @Serializable
    object Sessions

    @Serializable
    object WebDev

    @Serializable
    object ExchangeRate

    @Serializable
    object SoundMeter

    @Serializable
    object Chat

    @Serializable
    object ChatText

    @Serializable
    data class ChatEditText(val id: String)

    @Serializable
    object Scan

    @Serializable
    object ScanHistory

    @Serializable
    object Apps

    @Serializable
    object OtherFile

    @Serializable
    object Docs

    @Serializable
    object Notes

    @Serializable
    data class NotesCreate(val tagId: String)

    @Serializable
    data class NoteDetail(val id: String)

    @Serializable
    data class Images(val bucketId: String)

    @Serializable
    data class Tags(val dataType: Int)

    @Serializable
    object PdfViewer

    @Serializable
    object Feeds

    @Serializable
    data class FeedEntries(val feedId: String)

    @Serializable
    data class FeedEntry(val id: String)

    @Serializable
    object FeedSettings

    @Serializable
    object Audio

    @Serializable
    object AudioPlayer

    @Serializable
    object TextFile

    @Serializable
    data class MediaFolders(val dataType: Int)

    @Serializable
    data class Videos(val bucketId: String)

    @Serializable
    data class AppDetails(val id: String)

}