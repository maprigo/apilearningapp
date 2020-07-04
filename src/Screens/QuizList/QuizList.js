import React, { Component } from "react";
import MCQs from "../MCQs/MCQs";
import coverPic1 from "../../images/quiz.jpg";
import coverPic2 from "../../images/test.jpg";

class QuizList extends Component {
  constructor() {
    super();
    this.state = {
      quiz_list: [
        { quizName: "Comprension de Texto", tests: 3 },
      ],
      quiz_info: [
        {
          quizName: "Comprension de Texto",
          tests: [
            {
              name: "Nivel 1",
              questions: 5,
              time: 60,
              quiz_questions: [
                {
                  quiz: "De estas posibilidades, elige la que creas correcta",
                  option1: "Lo que acabo de leer es un texto narrativo",
                  option2: "Se trata de un texto de tipo descriptivo con algo de narración",
                  option3: "Es un texto de lírica popular",
                  answer: "1",
                },
                {
                  quiz: "Los textos en que los protagonistas son animales se llaman",
                  option1: "Narraciones épicas",
                  option2: "Fábulas",
                  option3: "Odas",
                  answer: "2",
                },
                {
                  quiz: "La historia que acabas de leer es",
                  option1: "Un cuento de literatura popular",
                  option2: "Un cuento literario de un autor culto",
                  option3: "Un texto no literario",
                  answer: "3",
                },
                {
                  quiz: "Como casi todos los textos de este tipo, el que has leído consta de las siguientes partes",
                  option1: "Introducción-desarrollo-conclusiones",
                  option2: "Presentación del tema-argumentos-recapitulación final",
                  option3: "Planteamiento-nudo-desenlace",
                  answer: "3",
                },
                {
                  quiz: "Para intentar ser lo más 'auténtica' posible, lo primero que hizo la rana fue",
                  option1: "Buscarse un ansioso espejo muy largo",
                  option2: "Comprarse un espejo donde mirarse largo rato",
                  option3: "Esforzarse mucho en conseguirlo",
                  answer: "2",
                },
              ],
            },
            {
              name: "Nivel 2",
              questions: 10,
              time: 120,
              quiz_questions: [
                {
                  quiz: "De estas posibilidades, elige la que creas correcta",
                  option1: "Lo que acabo de leer es un texto narrativo",
                  option2: "Se trata de un texto de tipo descriptivo con algo de narración",
                  option3: "Es un texto de lírica popular",
                  answer: "1",
                },
                {
                  quiz: "Los textos en que los protagonistas son animales se llaman",
                  option1: "Narraciones épicas",
                  option2: "Fábulas",
                  option3: "Odas",
                  answer: "2",
                },
                {
                  quiz: "La historia que acabas de leer es",
                  option1: "Un cuento de literatura popular",
                  option2: "Un cuento literario de un autor culto",
                  option3: "Un texto no literario",
                  answer: "3",
                },
                {
                  quiz: "Como casi todos los textos de este tipo, el que has leído consta de las siguientes partes",
                  option1: "Introducción-desarrollo-conclusiones",
                  option2: "Presentación del tema-argumentos-recapitulación final",
                  option3: "Planteamiento-nudo-desenlace",
                  answer: "3",
                },
                {
                  quiz: "Para intentar ser lo más 'auténtica' posible, lo primero que hizo la rana fue",
                  option1: "Buscarse un ansioso espejo muy largo",
                  option2: "Comprarse un espejo donde mirarse largo rato",
                  option3: "Esforzarse mucho en conseguirlo",
                  answer: "2",
                }, {
                  quiz: "La historia que acabas de leer es",
                  option1: "Un cuento de literatura popular",
                  option2: "Un cuento literario de un autor culto",
                  option3: "Un texto no literario",
                  answer: "3",
                },
                {
                  quiz: "De estas posibilidades, elige la que creas correcta",
                  option1: "Lo que acabo de leer es un texto narrativo",
                  option2: "Se trata de un texto de tipo descriptivo con algo de narración",
                  option3: "Es un texto de lírica popular",
                  answer: "1",
                },
                {
                  quiz: "Los textos en que los protagonistas son animales se llaman",
                  option1: "Narraciones épicas",
                  option2: "Fábulas",
                  option3: "Odas",
                  answer: "2",
                },
                {
                  quiz: "La historia que acabas de leer es",
                  option1: "Un cuento de literatura popular",
                  option2: "Un cuento literario de un autor culto",
                  option3: "Un texto no literario",
                  answer: "3",
                },
                {
                  quiz: "Como casi todos los textos de este tipo, el que has leído consta de las siguientes partes",
                  option1: "Introducción-desarrollo-conclusiones",
                  option2: "Presentación del tema-argumentos-recapitulación final",
                  option3: "Planteamiento-nudo-desenlace",
                  answer: "3",
                }
              ],
            },
            {
              name: "Nivel 3",
              questions: 15,
              time: 180,
              quiz_questions: [
                {
                  quiz: "De estas posibilidades, elige la que creas correcta",
                  option1: "Lo que acabo de leer es un texto narrativo",
                  option2: "Se trata de un texto de tipo descriptivo con algo de narración",
                  option3: "Es un texto de lírica popular",
                  answer: "1",
                },
                {
                  quiz: "Los textos en que los protagonistas son animales se llaman",
                  option1: "Narraciones épicas",
                  option2: "Fábulas",
                  option3: "Odas",
                  answer: "2",
                },
                {
                  quiz: "La historia que acabas de leer es",
                  option1: "Un cuento de literatura popular",
                  option2: "Un cuento literario de un autor culto",
                  option3: "Un texto no literario",
                  answer: "3",
                },
                {
                  quiz: "Como casi todos los textos de este tipo, el que has leído consta de las siguientes partes",
                  option1: "Introducción-desarrollo-conclusiones",
                  option2: "Presentación del tema-argumentos-recapitulación final",
                  option3: "Planteamiento-nudo-desenlace",
                  answer: "3",
                },
                {
                  quiz: "Para intentar ser lo más 'auténtica' posible, lo primero que hizo la rana fue",
                  option1: "Buscarse un ansioso espejo muy largo",
                  option2: "Comprarse un espejo donde mirarse largo rato",
                  option3: "Esforzarse mucho en conseguirlo",
                  answer: "2",
                },
                {
                  quiz: "De estas posibilidades, elige la que creas correcta",
                  option1: "Lo que acabo de leer es un texto narrativo",
                  option2: "Se trata de un texto de tipo descriptivo con algo de narración",
                  option3: "Es un texto de lírica popular",
                  answer: "1",
                },
                {
                  quiz: "Los textos en que los protagonistas son animales se llaman",
                  option1: "Narraciones épicas",
                  option2: "Fábulas",
                  option3: "Odas",
                  answer: "2",
                },
                {
                  quiz: "La historia que acabas de leer es",
                  option1: "Un cuento de literatura popular",
                  option2: "Un cuento literario de un autor culto",
                  option3: "Un texto no literario",
                  answer: "3",
                },
                {
                  quiz: "Como casi todos los textos de este tipo, el que has leído consta de las siguientes partes",
                  option1: "Introducción-desarrollo-conclusiones",
                  option2: "Presentación del tema-argumentos-recapitulación final",
                  option3: "Planteamiento-nudo-desenlace",
                  answer: "3",
                },
                {
                  quiz: "Para intentar ser lo más 'auténtica' posible, lo primero que hizo la rana fue",
                  option1: "Buscarse un ansioso espejo muy largo",
                  option2: "Comprarse un espejo donde mirarse largo rato",
                  option3: "Esforzarse mucho en conseguirlo",
                  answer: "2",
                }
                ,
                {
                  quiz: "De estas posibilidades, elige la que creas correcta",
                  option1: "Lo que acabo de leer es un texto narrativo",
                  option2: "Se trata de un texto de tipo descriptivo con algo de narración",
                  option3: "Es un texto de lírica popular",
                  answer: "1",
                },
                {
                  quiz: "Los textos en que los protagonistas son animales se llaman",
                  option1: "Narraciones épicas",
                  option2: "Fábulas",
                  option3: "Odas",
                  answer: "2",
                },
                {
                  quiz: "La historia que acabas de leer es",
                  option1: "Un cuento de literatura popular",
                  option2: "Un cuento literario de un autor culto",
                  option3: "Un texto no literario",
                  answer: "3",
                },
                {
                  quiz: "Como casi todos los textos de este tipo, el que has leído consta de las siguientes partes",
                  option1: "Introducción-desarrollo-conclusiones",
                  option2: "Presentación del tema-argumentos-recapitulación final",
                  option3: "Planteamiento-nudo-desenlace",
                  answer: "3",
                },
                {
                  quiz: "Para intentar ser lo más 'auténtica' posible, lo primero que hizo la rana fue",
                  option1: "Buscarse un ansioso espejo muy largo",
                  option2: "Comprarse un espejo donde mirarse largo rato",
                  option3: "Esforzarse mucho en conseguirlo",
                  answer: "2",
                }
              ],
            },
          ],
        },
      ],
      saveSelectedQuizObj: null,
      renderSelectedTestObj: false,
      renderMCQs: false,
      currentTestIndex: null,
    };
    this.back = this.back.bind(this);
    this.backToDashboard = this.backToDashboard.bind(this);
  }

  // saving selected quiz to state
  updateQuizInfoState(index) {
    const { quiz_info } = this.state;
    this.setState({
      saveSelectedQuizObj: quiz_info[index],
      renderSelectedTestObj: true,
    });
  }

  // back button function
  back() {
    this.setState({ renderSelectedTestObj: false });
  }

  backToDashboard(param) {
    this.setState({ renderMCQs: param });
  }

  renderQuizInfo() {
    const { saveSelectedQuizObj } = this.state;
    return (
      <div className="container">
        <h2>{saveSelectedQuizObj.quizName}</h2>

        <div className="row">
          {saveSelectedQuizObj.tests.map((test, i) => {
            return (
              <div
                className="col-md-4"
                key={`${saveSelectedQuizObj.quizName}_${test.name}`}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={coverPic2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{test.name}</h5>
                    <p className="card-text">
                      Preguntas en total: {test.questions}
                    </p>
                    <p>Tiempo Total: {test.time / 60} Minutes</p>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        this.setState({
                          renderMCQs: true,
                          currentTestIndex: i,
                          renderSelectedTestObj: false,
                        });
                      }}
                    >
                      Comenzar {i + 1} <i className=" fa fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <button className="btn btn-secondary" onClick={this.back}>
          Volver  <i className="fa fa-backward" />
        </button>
      </div>
    );
  }

  renderQuizList() {
    const { quiz_list } = this.state;
    return (
      <div className="container">
        <h2 style={{ color: "white", "font-family": "initial" }}>Bienvenido</h2>
        <h1 style={{ color: "black", "font-family": "initial" }}>
          Lee el sigiente texto
        </h1>

        <div className="row">
          {quiz_list.map((qList, index) => {
            return (
              <div className="col-md-12" key={`${qList}_${index}`}>
                <div className="card" style={{ width: "rem" }}>
                  <img
                    className="card-img-top-one"
                    src={coverPic1}
                    alt="Cuestionario Imagen" style={{ "margin-left": "35%",
                      padding: "1rem",
                      border: "2px solid #ccc",
                      /* IMPORTANTE */
                      "text-align": "center" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{qList.quizName}</h5>
                    {/* <p className="card-text">
                      Test your skills of {qList.quizName} by taking this small quiz.
                      It has {qList.tests} tests.
                    </p> */}
                    <p className="">
                      Había una vez una Rana que quería ser una Rana auténtica,
                      y todos los días se esforzaba en ello. Al principio se
                      compró un espejo en el que se miraba largamente buscando
                      su ansiada autenticidad. Unas veces parecía encontrarla y
                      otras no, según el humor de ese día o de la hora, hasta
                      que se cansó de esto y guardó el espejo en un baúl. Por
                      fin pensó que la única forma de conocer su propio valor
                      estaba en la opinión de la gente, y comenzó a peinarse y a
                      vestirse y a desvestirse (cuando no le quedaba otro
                      recurso) para saber si los demás la aprobaban y reconocían
                      que era una Rana auténtica. Un día observó que lo que más
                      admiraban de ella era su cuerpo, especialmente sus
                      piernas, de manera que se dedicó a hacer sentadillas y a
                      saltar para tener unas ancas cada vez mejores, y sentía
                      que todos la aplaudían. Y así seguía haciendo esfuerzos
                      hasta que, dispuesta a cualquier cosa para lograr que la
                      consideraran una Rana auténtica, se dejaba arrancar las
                      ancas, y los otros se las comían, y ella todavía alcanzaba
                      a oír con amargura cuando decían que qué buena Rana, que
                      parecía Pollo.
                    </p>
                    <button
                      className="btn btn-info"
                      onClick={this.updateQuizInfoState.bind(this, index)}
                    >
                      Comenzar <i className=" fa fa-paper-plane" />
                    </button>
                    {/* <button className="btn btn-primary" >Next <i class=" fa fa-paper-plane"></i></button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const {
      renderSelectedTestObj,
      renderMCQs,
      saveSelectedQuizObj,
      currentTestIndex,
    } = this.state;
    return (
      <div>
        {renderSelectedTestObj ? (
          this.renderQuizInfo()
        ) : renderMCQs ? (
          <MCQs
            currentQuesObj={saveSelectedQuizObj}
            currentTestIndex={currentTestIndex}
            backToDashboard={this.backToDashboard}
          />
        ) : (
          this.renderQuizList()
        )}
        {console.log(currentTestIndex, saveSelectedQuizObj, renderMCQs)}
      </div>
    );
  }
}

export default QuizList;
