import Image from 'next/image';

const Page = () => {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-white">LOGO</span>
          </div>
          <h2 className="text-2xl font-bold">Login or Signup</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
            LOGIN
          </button>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-gray-500 text-sm">Or login with</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="w-full flex items-center justify-center px-4 py-2 border rounded-md hover:bg-gray-100">
              <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="mr-2" />
              Google
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border rounded-md hover:bg-gray-100">
              <Image src="/facebook-icon.svg" alt="Facebook" width={20} height={20} className="mr-2" />
              Facebook
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            New to Myntra?{' '}
            <a href="#" className="text-primary font-semibold hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    // </div>
  );
};

export default Page;
