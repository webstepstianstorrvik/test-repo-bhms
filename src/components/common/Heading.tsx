import './heading.css'

import { Link, useLocation } from 'react-router-dom'

const IGNORE_LIST = ['nyheter/']

const Heading = () => {
    const location = useLocation()
    var paths = location.pathname.split('/').filter((path) => path)
    var heading = paths[paths.length - 1]

    /** @TODO: START Fix this hack to avoid broken backlink in haandbok */
    if (paths[0] === 'haandbok') {
        paths[0] = 'brukerstotte'
    }
    /** @Todo: END */

    if (paths[0] === 'aktiviteter' && paths[1] === 'oversikt' && paths[2]) {
        paths = paths.slice(0, 2)
        heading = 'Aktivitet'
    }

    if (paths[0] === 'nyheter' && paths[1]) {
        paths = paths.slice(0, 1)
        heading = 'Nyheter'
    }

    const formatText = (text: string) => {
        return (
            text.charAt(0).toUpperCase() +
            text
                .slice(1)
                .replaceAll('-', ' ')
                .replaceAll('aa', 'å')
                .replaceAll('ae', 'æ')
                .replaceAll('oo', 'ø')
        )
    }

    const getPath = (index: number) => {
        let path = ''
        for (let i = 0; i <= index; i++) {
            path += '/' + paths[i]
        }
        return path
    }

    if (
        paths.length === 0 ||
        IGNORE_LIST.some((v) => location.pathname.includes(v))
    ) {
        return null
    }

    return (
        <div className="top-heading">
            <h1>{formatText(heading)}</h1>
            <div>
                {paths.map((path, index) => (
                    <div key={path} className="heading-path-item">
                        {index > 0 ? <span>&gt;</span> : null}
                        <Link to={getPath(index)}>{formatText(path)}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Heading
