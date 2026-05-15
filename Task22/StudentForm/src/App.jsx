import StudentRegistration from "./StudentRegistration"
import FeedbackForm from "./FeedbackForm"
import ContactForm from "./ContactForm"
function App(){
  return(
    <div>
      <StudentRegistration/>
      <hr/>
      <FeedbackForm/>
      <hr/>
      <ContactForm/>
    </div>
  )
}
export default App;