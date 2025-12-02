import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Alert, Button, CircularProgress } from "@mui/material";
import { toast } from "sonner";
import SignUpComponent from "../../../components/layout/index";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Enter your email address"),
  password: yup.string().required("Enter your password"),
  first_name: yup.string().required("Enter your first name"),
  last_name: yup.string().required("Enter your last name"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), " "], "Passwords must match")
    .required("Confirm your password"),
});

export default function SignUp() {
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(values: { email: string; password: string }) {
    try {
      const res = await useSignUp(values);
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "An error occurred during signup.");
    } finally {
      null;
    }
  }

  return (
    <div className="w-full flex">
      <SignUpComponent title=" Welcome back to" isSignUp={true} />

      <div className="flex flex-col justify-center p-7 space-y-5">
        <h2 className="text-xl text-dark-950 font-medium">
          Enter your Details
        </h2>

        <Formik
          initialValues={{
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            confirm_password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-[463px] flex flex-col space-y-5">
              <Field
                name="first_name"
                type="first_name"
                placeholder="First Name"
                as={Input}
              />
              <Field
                name="last_name"
                type="last_name"
                placeholder="Last Name"
                as={Input}
              />
              <Field
                name="email"
                type="email"
                placeholder="Your Email"
                as={Input}
              />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                as={Input}
              />
              <Field
                name="confirm_password"
                type="confirm_password"
                placeholder="Confirm Password"
                as={Input}
              />

              <div className="flex justify-end">
                <Link to="/login">
                  <p className="text-brand-500 hover:underline text-xs cursor-pointer">
                    Already have an account?
                  </p>
                </Link>
              </div>

              <Button
                className="w-full !bg-brand-500 !text-[#FDFDFF] !py-[10px] text-base font-medium rounded-lg transition-all hover:scale-95 flex items-center justify-center gap-2 disabled:opacity-60"
                type="submit"
                // loading={isSubmitting}
                disabled={isSubmitting}
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
