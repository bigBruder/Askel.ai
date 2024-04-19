import { ActionFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { LoginForm } from "~/components/LoginForm";

export const meta: MetaFunction = () => {
  return [{ title: "Log In" }];
};
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(formData.get('email'))
  console.log(formData.get('password'))
  console.log(formData.get('remember'))

  return json({ ok: true });
}
const Login = () => {
  return (
    <main className=" h-screen flex items-center justify-center  bg-auth bg-no-repeat bg-right-bottom">
      <div className="w-[834px] h-[561px] px-[171px] pt-20 flex flex-col items-center gap-6 rounded-lg bg-[#12121ae5] ">
        <img src="/icons/auth-logo.svg" alt="logo" className="" />
        <h3 className=" font-bold text-4xl/9 text-[#57a6f8] text-center capitalize">
          Login to your account
        </h3>
        <LoginForm />
        <Link to="/register" className="text-[#57a6f8] text-center font-medium">
          Register
        </Link>
      </div>
    </main>
  );
};

export default Login;
