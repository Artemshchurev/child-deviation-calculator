import {Container} from 'react-bootstrap'
import {Equation, EquationContext} from "react-equation";
import {useEffect} from "react";
import graphPng from './graph.png'
import {Link} from "react-router-dom";


export const About = () => {
    useEffect(() => {
        document.title = 'О приложении'
    }, [])

    return (<div className="App">
            <header className="about-header">
                <Link to="/" className="link-to-page" style={{fontSize: 'calc(10px + 2vmin)'}}>Калькулятор</Link>
                <Container style={{width: '800px'}} className="pb-3">
                    <p className="pt-3">
                        Прогностическая модель рисков отставаний НПР у детей дошкольного
                        возраста (4-6 лет) созданная методом бинарной логистической регрессии,
                        согласно формуле:
                    </p>
                    Где, <Equation value="Z = b_1 * X_1 + b_2 * X_2 "/> + ... + <Equation value="b_n * X_n + a"/>,
                    <p className="mt-3 about-paragraph">
                        В роли независимых переменных <EquationContext
                        render={equation => <span>{equation('X_1')}</span>}/>, <EquationContext
                        render={equation => <span>{equation('X_2')}</span>}/>, <EquationContext
                        render={equation => <span>{equation('X_3')}</span>}/>, ... <EquationContext
                        render={equation => <span>{equation('X_n')}</span>}/> используются статистически значимые факторы риска, предварительно отобранные путем
                        анализа историй развития и определения показателей относительного риска
                        (RR) в выборке из 104 детей; коэффициенты <EquationContext
                        render={equation => <span>{equation('b_1')}</span>}/>, <EquationContext
                        render={equation => <span>{equation('b_2')}</span>}/>, <EquationContext
                        render={equation => <span>{equation('b_3')}</span>}/>, ... <EquationContext
                        render={equation => <span>{equation('b_n')}</span>}/> и а рассчитаны с
                        помощью программы IBM SPSS 27.
                    </p>
                    <p className="mt-3 about-paragraph">
                        Для определения диагностической ценности модели применен ROC-
                        анализ (рисунок 1). Пороговое значение функции в точке отсечения (cut-off)
                        составило 0,405 при чувствительности 93,1% и специфичности в 80%
                        (приложение 5.3). Значение площади под кривой (AUC) составляет 0,922,
                        что свидетельствует об отличном качестве прогностической модели
                        (таблица 5.4).
                    </p>
                    <p className="mt-3">
                        Рисунок 1. ROC анализ прогностической рисков отставаний НПР.
                        <img src={graphPng} className="roc-graph mt-3" alt="ROC анализ прогностической рисков отставаний НПР"/>
                    </p>
                    <p className="mt-3 about-paragraph">
                        <b>Авторы:</b> Момот Г.О., аспирант института педиатрии ГБОУ ВО ТГМУ;<br/>
                        Крукович Е.В., д.м.н. профессор института педиатрии ГБОУ ВО ТГМУ;<br/>
                        Почта для обратной связи и ссылок на полный текст исследования:<br/>
                        <a href="mailto:garimg12@gmail.com">garimg12@gmail.com</a><br/>
                        Г. Владивосток 2023.
                    </p>
                </Container>
            </header>
        </div>)
}
