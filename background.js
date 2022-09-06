chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'search',
    title: `Search "%s" in dict`,
    contexts: ['selection'],
  })
})

chrome.contextMenus.onClicked.addListener(({ selectionText }) => {
  chrome.tabs.create({
    url: `https://dictionary.cambridge.org/dictionary/learner-english/${selectionText.trim()}`,
  })
})
