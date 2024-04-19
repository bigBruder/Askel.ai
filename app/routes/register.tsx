import { ActionFunctionArgs, MetaFunction, json } from '@remix-run/node';
import { RegisterForm } from '~/components/RegisterForm';

export const meta: MetaFunction = () => {
  return [{ title: 'Register' }];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log(formData.get('email'));
  console.log(formData.get('page'));

  return json({ ok: true });
}
const Register = () => {
  return (
    <main className=" h-screen flex items-center justify-center  bg-auth bg-no-repeat bg-right-bottom">
      <div className="max-w-[834px] max-h-[561px] px-[171px] py-20 flex flex-col items-center gap-6 rounded-lg bg-[#12121ae5] ">
        <img src="/icons/auth-logo.svg" alt="logo" className="w-[100px] h-[52px]" />
        <h3 className=" font-bold text-4xl/9 text-[#57a6f8] text-center capitalize">
          Askel.ai: Where Automation Meets Simplicity
        </h3>
        <p className=" max-w-[347px] text-sm/4 text-center">
          Simply fill out the form and our dedicated support team will reach out to you
          shortly.
        </p>
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
