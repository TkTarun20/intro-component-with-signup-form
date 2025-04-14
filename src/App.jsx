import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "./Input";

const inputsContent = [
    {
        name: "first_name",
        type: "text",
        placeholder: "First Name",
        validation: {
            required: {
                value: true,
                message: "First Name cannot be empty",
            },
            pattern: {
                value: /^[A-Za-z]+$/,
                message: "Alphabets without spaces are only allowed",
            },
        },
    },
    {
        name: "last_name",
        type: "text",
        placeholder: "Last Name",
        validation: {
            required: {
                value: true,
                message: "Last Name cannot be empty",
            },
            pattern: {
                value: /^[A-Za-z]+$/,
                message: "Alphabets without spaces are only allowed",
            },
        },
    },
    {
        name: "email",
        type: "email",
        placeholder: "Email Address",
        validation: {
            required: {
                value: true,
                message: "Email Address cannot be empty",
            },
            pattern: {
                value: /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i,
                message: "Looks like this is not an email",
            },
        },
    },
    {
        name: "password",
        type: "password",
        placeholder: "Password",
        validation: {
            required: {
                value: true,
                message: "Password cannot be empty",
            },
        },
    },
];

function App() {
    const {
        register,
        getFieldState,
        handleSubmit,
        reset,
        trigger,
        clearErrors,
        formState: { errors, isSubmitSuccessful, submitCount },
    } = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        },
        mode: "onBlur",
        reValidateMode: 'onBlur',
    });

    useEffect(() => {
        isSubmitSuccessful && reset();
    }, [isSubmitSuccessful, reset]);

    const onSubmit = (data) => {
        const passwordHidden = '*'.repeat(data['password'].length);

        const subscriptionMsg = `You have successfully registered for the free trial! Your details are as follows:\n\nFirst Name: ${data['first_name']}\nLast Name: ${data['last_name']}\nEmail: ${data['email']}\nPassword: ${passwordHidden}`;

        alert(subscriptionMsg);
    };

    return (
        <main className="sm:mx-auto grid lg:grid-cols-2 gap-16 lg:items-center max-w-[37.4375rem] lg:max-w-6xl">
            <section className="text-white lg:text-left">
                <h1 className="mb-6 text-lg leading-1.3 font-bold">
                    Learn to code by watching others
                </h1>
                <p className="opacity-80">
                    See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how
                    developers think is invaluable.
                </p>
            </section>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className="py-6 px-12 mb-6 text-white bg-blue rounded-lg shadow-[0_8px] shadow-dark-blue/25">
                    <strong className="font-bold">Try it free 7 days</strong>{" "}
                    <span className="opacity-80">then $20/mo. thereafter</span>
                </p>
                <div className="p-6 lg:p-8 bg-white rounded-lg shadow-[0_8px] shadow-dark-blue/25">
                    <div className="mb-3 grid gap-5">
                        {inputsContent.map((content) => {
                            return (
                                <Input
                                    key={content.name}
                                    type={content.type}
                                    name={content.name}
                                    placeholder={content.placeholder}
                                    validation={content.validation}
                                    register={register}
                                    fieldState={getFieldState}
                                    trigger={trigger}
                                    errors={errors}
                                    clearErrors={clearErrors}
                                    hasSubmitErrorOnce={submitCount > 0 && !isSubmitSuccessful}
                                />
                            );
                        })}
                        <button
                            type="submit"
                            className="p-4 text-sm text-white uppercase tracking-wider font-medium bg-green rounded-md shadow-[0_-4px_inset] shadow-dark-blue/20 focus-visible:outline-none supports-[not_selector(:focus-visible)]:focus:outline-none focus-visible:ring-2 supports-[not_selector(:focus-visible)]:focus:ring-2 ring-offset-2 ring-blue transition-colors submit-btn"
                        >
                            Claim your free trial
                        </button>
                    </div>
                    <p className="mx-4 text-grayish-blue font-semi-bold text-xs leading-1.8">
                        By clicking the button, you are agreeing to our{" "}
                        <a
                            href="#"
                            className="text-red box-decoration-clone"
                        >
                            <strong className="font-bold">
                                Terms and Services
                            </strong>
                        </a>
                    </p>
                </div>
            </form>
        </main>
    );
}

export default App;
