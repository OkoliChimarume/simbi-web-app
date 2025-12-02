import { useNavigate, Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Button, CircularProgress } from "@mui/material";
import SignUpComponent from "../../../components/layout/index";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Enter your email address"),
  password: yup.string().required("Enter your password"),
});

export default function Login() {
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(values: { email: string; password: string }) {
    localStorage.setItem("user_email", JSON.stringify(values.email));
    navigate("/");
  }
  // async function handleSubmit(
  //   values: { email: string; password: string },
  //   e: React.FormEvent
  // ) {
  //   e.preventDefault();
  //   try {
  //     const res = await useLogin(values);
  //     navigate("/");
  //   } catch (error: any) {
  //     toast.error(error.message || "An error occurred during login.");
  //   } finally {
  //     null;
  //   }
  // }
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   mutate(form); // sends {name, email}
  // };

  return (
    <div className="w-full flex">
      <SignUpComponent title=" Welcome back to " />

      <div className="flex flex-col justify-center p-7 space-y-6">
        <h2 className="text-xl text-brand-800 font-medium">Sign In</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ isSubmitting, dirty}) => (
            <Form className="w-[463px] flex flex-col space-y-6">
              <div className="w-full flex flex-col">
                <Field
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  as={Input}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <div className="text-sm text-error-500">{msg}</div>
                  )}
                />
              </div>
              <div className="w-full flex flex-col">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  as={Input}
                />
                <ErrorMessage
                  name="password"
                  render={(msg) => (
                    <div className="text-sm text-error-500">{msg}</div>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <div className="gap-1">
                  <p className="text-state-500 text-xs hover:underline text-opacity-50 cursor-pointer">
                    Forgot Password?
                  </p>
                  <Link to="/signup">
                    <p className="text-brand-500 hover:underline text-xs cursor-pointer">
                      Don’t have an account?
                    </p>
                  </Link>
                </div>
              </div>

              <Button
                className="w-full !bg-brand-500 !text-[#FDFDFF] !py-[10px] text-base font-medium rounded-lg transition-all hover:scale-95 flex items-center justify-center gap-2 disabled:opacity-60"
                type="submit"
                // loading={isSubmitting}
                disabled={isSubmitting || !dirty}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress
                      color="inherit"
                      className="text-white"
                      size={22}
                    />
                    <span className="sr-only">Submitting</span>
                  </>
                ) : (
                  "Continue"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

const Input = ({ className, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      className="border border-[#C9C0D4] bg-transparent py-2 px-[10px] text-dark-950 rounded-lg"
      {...props}
    />
  );
};
