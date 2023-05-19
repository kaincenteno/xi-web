let browser_language = navigator.language
browser_language = browser_language.slice(0, 2)

async function get_language_data() {
    const response = await fetch('./script/language/index.json')
    const language_data = await response.json()

    for(languageId in language_data) {
        if (["zh", "es"].includes(browser_language)) {
            console.log(language_data[languageId])
            console.log(language_data[languageId][browser_language])
            idTag = document.getElementById(language_data[languageId])
            idTag.textContent = language_data[languageId][browser_language]
        } else {
            console.log(languageId)
            console.log(language_data[languageId])
            console.log(language_data[languageId]["en"])
            idTag = document.getElementById(languageId)
            idTag.textContent = language_data[languageId]["en"]
        }
    }
}

get_language_data()