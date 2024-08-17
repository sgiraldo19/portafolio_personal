import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

export default function SkillCircle() {
    const [isLoading, setLoad] = useState(true)

    const container = '.content'
    const texts = [
        'Java',
        'React',
        'Trabajo en equipo',
        'MongoDB',
        'NodeJS',
        'Resolución de problemas',
        'Redux',
        'HTML5',
        'Atención al detalle',
        'CSS3',
        'JS',
        'Pensamiento crítico',
        'FireBase',
        'MySQl',
        'Creatividad',
        'Python',
        'Git',
        'Adaptabilidad',
        'Unity',
        'Ubuntu',
    ]
    const options = {
        radius: 300,
        // animation speed
        // slow, normal, fast
        maxSpeed: 'slow',
        initSpeed: 'slow',
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
        // interact with cursor move on mouse out
        keep: true,
    }
    //   to render wordcloud each time the page is reloaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (isLoading) {
            TagCloud(container, texts, options)
            setLoad(false)
        }
    })

    return (
        <div className="main">
            <span className="content"></span>
        </div>
    )
}
