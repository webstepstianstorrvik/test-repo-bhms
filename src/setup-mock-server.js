import HttpRequestMock from 'http-request-mock'
import {
    aktiviteter,
    aktivitetRepetisjoner,
    aktivitetsmaler,
    ansvarligPerson,
    boligselskaper,
    news,
    sjekkliste,
    skjemasamling,
} from './mock-data'

export const setupMock = () => {
    if (!(process.env.NODE_ENV === 'development')) {
        return
    }

    const mocker = HttpRequestMock.setup()

    mocker.get(
        'https://api.bevarhms.no/api/boligselskaper/mine',
        (_, res) => {
            res.status = 200
            return boligselskaper
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/boligselskaper/3677/sjekklistemal',
        (_, res) => {
            res.status = 200
            return sjekkliste
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/boligselskaper/3677/skjemasamling',
        (_, res) => {
            res.status = 200
            return skjemasamling
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/boligselskaper/3677/ansvarlig-person',
        (_, res) => {
            res.status = 200
            return ansvarligPerson
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/aktivitet-veiviser',
        (_, res) => {
            res.status = 200
            return aktivitetsmaler
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/boligselskaper/3677/aktiviteter',
        (_, res) => {
            res.status = 200
            return aktiviteter
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/aktivitet-repetisjoner',
        (_, res) => {
            res.status = 200
            return aktivitetRepetisjoner
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/nyheter',
        (_, res) => {
            res.status = 200
            return news
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/nyheter/0',
        (_, res) => {
            res.status = 200
            return news[0]
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/nyheter/1',
        (_, res) => {
            res.status = 200
            return news[1]
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/nyheter/2',
        (_, res) => {
            res.status = 200
            return news[2]
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/nyheter/3',
        (_, res) => {
            res.status = 200
            return news[3]
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )

    mocker.get(
        'https://api.bevarhms.no/api/nyheter/4',
        (_, res) => {
            res.status = 200
            return news[4]
        },
        {
            delay: 500,
            header: { 'Content-Type': 'application/json' },
        }
    )
}
