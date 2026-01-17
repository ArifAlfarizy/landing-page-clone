import Button from "./Button"

const Slogan = () => {
  return (
    <div className='flex flex-col items-center gap-2 text-center mt-25'>
      <h1 className='text-3xl sm:text-4xl md:text-4.5xl lg:text-5xl font-semibold mb-5'>Everything you need to hire in one place</h1>
      <p className="max-w-150 sm:max-w-120 md:max-w-150 lg:max-w-150 mb-6">Polymer is a powerful applicant tracking system that streamlines the hiring process.
        Publish roles, manage applicants, and make decisions all in one platform.
      </p>
      <Button name="Sign up for free"/>
    </div>
  )
}

export default Slogan