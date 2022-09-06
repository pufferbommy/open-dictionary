chrome.contextMenus.create({
  id: 'search',
  title: `Search "%s" in dictionary`,
  contexts: ['selection'],
})

chrome.contextMenus.onClicked.addListener(({ selectionText }) => {
  const url = `https://dictionary.cambridge.org/dictionary/learner-english/${selectionText
    .trim()
    .toLowerCase()}`

  chrome.tabs.create({
    url,
  })
})
