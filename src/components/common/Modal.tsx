import './modal.css'
import React, { ReactNode, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSTransition } from 'react-transition-group'
import Button from './Button'

interface IModalProps {
    children: ReactNode
    onClose: () => void
    onSubmit?: (event: any) => void
    show: boolean
    title: string
}

const Modal = ({ children, onClose, onSubmit, show, title }: IModalProps) => {
    const closeOnEscapeKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        },
        [onClose]
    )

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [closeOnEscapeKeyDown])

    return createPortal(
        <CSSTransition
            in={show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
                <div
                    className="modal__content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal__content-top">
                        <h1>{title}</h1>
                        <button className="btn-icon" onClick={onClose}>
                            <FontAwesomeIcon
                                className="cpointer"
                                icon={faXmark}
                                size="3x"
                            />
                        </button>
                    </div>
                    <div className="modal__content-main">{children}</div>
                    <div className="modal__content-bottom">
                        <Button variant="secondary" onClick={onClose}>
                            {onSubmit ? 'Avbryt' : 'Lukk'}
                        </Button>
                        {onSubmit && (
                            <Button className="mlm" onClick={onSubmit}>
                                Bekreft
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById('root')!!
    )
}

export default Modal
