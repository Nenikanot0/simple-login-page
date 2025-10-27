
const InputField = ({type,placeholder,icon}) => {
  return (
    <>
    <div className="input-wrapper">
          <input type={type} placeholder={placeholder} className="input-field" required />
          <i className="material-symbols-rounded">{icon}</i>
          {type==='password' && (
            <i className="material-symbols-rounded eye-icon">
                visibility_off
            </i>
          )}
        </div>
    </>
  )
}

export default InputField;