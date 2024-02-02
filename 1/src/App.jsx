import About from './Compontent/About'
import Contact from './Compontent/Contact'
import Count from './Compontent/Count'
import Form from './Compontent/Form'

function App() {
  let title = 'About Page'
  let para = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'

  let contact_title = 'Contact Page'
  let contact_para = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.fkigigkg'

  let form_title = 'Contact Page'
  let form_para = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.fkigigkg'

  const data =[
    {
      name: 'kenny',
      color: 'black'
    },
    {
      name: 'coker',
      color: 'red'
    },
    {
      name: 'abdual',
      color: 'blue'
    }
  ]

  return (
    <div>
      APP
      <About
        title_name={title}
        paragraph={para} />
      <Contact
        contact_name={contact_title}
        parag={contact_para}
      />
      <Count />
      <Form
        people={data}
        title={form_title}
        para={form_para} />
    </div>
  )
}

export default App