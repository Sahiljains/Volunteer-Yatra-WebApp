import wrong from '../assets/vectors/wrong.png'
import correct from '../assets/vectors/correct.png'

const FormInput = ({ inputHook, name, asterisk, type, placeholder, content }) => {
  return (
    <div className='form-input-section'>
      <div className='p4 text-semi-bold'>
        {name} {asterisk && <span className='text-danger'>*</span>}
      </div>
      <div className='position-relative'>
        <input type={type} placeholder={placeholder} className='lead text-medium' {...inputHook.bind} />
        {inputHook.error !== '' && (
          <img src={inputHook.error === 'true' ? wrong : correct} alt='' className='field-checks' />
        )}
      </div>
      <>{content}</>
    </div>
  )
}

FormInput.defaultProps = {
  asterisk: false,
}

export default FormInput
