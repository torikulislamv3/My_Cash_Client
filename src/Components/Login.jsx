export const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content"> 
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <h1 className="text-center font-bold text-2xl text-purple-900">My_Cash</h1>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <div className="mt-2 text-center">
                <a className="text-red-600 underline" href="">create an account</a>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
