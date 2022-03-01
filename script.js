function addIntelligenceContainer(id, className, title, content, first = false){
    container = document.createElement('div')
    titleEntity = document.createElement('h3')
    contentEntity = document.createElement('p')
    
    container.id = id
    container.className = className
    titleEntity.innerHTML = title
    contentEntity.innerHTML = content

    container.append(titleEntity)
    container.append(contentEntity)

    // If first is specified as true, append the
    // item to the top of the list (could be used
    // to display 'breaking news' items)
    if (first){
        document.getElementById('content').prepend(container)
    }else{
        document.getElementById('content').append(container)
    }
}

addIntelligenceContainer('first', 'content','First consectutive item','This item will be loaded first')
addIntelligenceContainer('second', 'content','Second consecutive item','This item will be loaded second')
addIntelligenceContainer('last', 'content','Item to be displayed at top','This item will be loaded last, but be displayed at top of feed', true)