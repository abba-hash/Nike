
const Button = ({label, iconURL, backgroundColor, borderColor,textColor}) => {
  return (
    <button className={`flex justify-center items-center
    gap-2 px-7 py-4 boder font-montserrat text-lg
    leading-none 
    ${ backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` 
    :"bg-coral-red text-white border-coral-red"}
    rounded-full w-full`}>
        {label}
        {iconURL &&<img  
        src={iconURL}
        alt={label}
        className="ml-2 rounded-full
        h-5 w-5"
        />}
    </button>
  )
}

export default Button