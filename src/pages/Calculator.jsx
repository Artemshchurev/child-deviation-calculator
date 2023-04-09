import {useEffect, useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Calculator = () => {
    useEffect(() => {
        document.title = 'Калькулятор'
    }, [])

    const [x1, setX1] = useState(true),
        [x2, setX2] = useState(true),
        [x3, setX3] = useState(true),
        [x4, setX4] = useState(true),
        [x5, setX5] = useState(true),
        [x6, setX6] = useState(true),
        [x7, setX7] = useState(true),
        [x8, setX8] = useState(true),
        [x9, setX9] = useState(true),
        [x10, setX10] = useState(true),
        zCoefficient = 1.096 * x1 + 1.82 * x2 + 0.782 * x3 + 0.63 * x4 + 1.558 * x5 + 1.247 * x6 + 2.243 * x7 + 1.444 * x8 + 1.79 * x9 + 1.65 * x10 - 10.313,
        probability = 1 / (1 + Math.exp(-zCoefficient))

    return (
        <div className="App">
            <header className="App-header">
                <Link to="/about" className="link-to-page">О приложении</Link>
                <Container style={{width: '1000px'}}>
                    <h2>Калькулятор вероятности отклонений нервно-психического развития детей 4-6 лет, имевших факторы риска в
                        раннем возрасте</h2>
                    <Row className="mt-4">
                        <Col className="switch-container">
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x1} onChange={() => setX1(!x1)}/>
                                <div className="text-block">
                                    <div>Курение матери</div>
                                    <span className="description">(Да - не отмечено, нет - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x2} onChange={() => setX2(!x2)}/>
                                <div className="text-block">
                                    <div>Неврологический анамнез</div>
                                    <span className="description">(Да - не отмечено, нет - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x3} onChange={() => setX3(!x3)}/>
                                <div className="text-block">
                                    <div>Течение родов</div>
                                    <span
                                        className="description">(Осложнённые - не отмечено, физиологичные - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x4} onChange={() => setX4(!x4)}/>
                                <div className="text-block">
                                    <div>Течение беременности</div>
                                    <span
                                        className="description">(Осложнённые - не отмечено, физиологичные - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x5} onChange={() => setX5(!x5)}/>
                                <div className="text-block">
                                    <div>Оценки по Апгар</div>
                                    <span className="description">(От 1 до 7 балов - не отмечено, от 8 до 10 баллов - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x6} onChange={() => setX6(!x6)}/>
                                <div className="text-block">
                                    <div>Масса при рождении</div>
                                    <span
                                        className="description">(Ниже 2500гр - не отмечено, выше 2500гр - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x7} onChange={() => setX7(!x7)}/>
                                <div className="text-block">
                                    <div>НСГ до года</div>
                                    <span className="description">(Патология - не отмечено, норма - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x8} onChange={() => setX8(!x8)}/>
                                <div className="text-block">
                                    <div>График вакцинации</div>
                                    <span
                                        className="description">(Нарушен - не отмечено, по календарю - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x9} onChange={() => setX9(!x9)}/>
                                <div className="text-block">
                                    <div>Д-учет невролога до года</div>
                                    <span className="description">(Состоял - не отмечено, не состоял - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="switch-container">
                                <Form.Check inline type="switch" checked={x10} onChange={() => setX10(!x10)}/>
                                <div className="text-block">
                                    <div>Полнота семьи</div>
                                    <span className="description">(Неполная - не отмечено, полная - отмечено)</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="result-container mt-4">
                        Коэффициент Z: {zCoefficient.toFixed(1)}<br/>
                        Вероятность (P): {probability}
                        {getRiskMessage(probability)}
                    </div>
                </Container>
            </header>
        </div>
    )
}

const getRiskMessage = (probability) => {
    if (probability <= 0.24) {
        return <div className="bg-danger message-result">Крайне высокий риск</div>
    } else if (probability >= 0.25 && probability <= 0.45) {
        return <div style={{backgroundColor: 'orange'}} className="message-result">Высокий риск</div>
    } else if (probability >= 0.5 && probability <= 0.74) {
        return <div className="bg-warning message-result">Средний риск</div>
    } else {
        return <div className="bg-success message-result">Низкий риск</div>
    }
}