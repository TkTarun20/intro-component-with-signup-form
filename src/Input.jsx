import { useDebouncedCallback } from "use-debounce";

function Input({
    type,
    name,
    placeholder,
    validation,
    register,
    fieldState,
    trigger,
    errors,
    clearErrors,
    hasSubmitErrorOnce,
}) {
    const debounced = useDebouncedCallback(() => {
        trigger(name);
    }, 700);

    return (
        <div>
            <div className="relative">
                <input
                    type={type}
                    className={
                        errors[name]
                            ? "text-red border-2 focus:border border-red"
                            : "pr-4 lg:pr-8"
                    }
                    placeholder={placeholder}
                    {...register(name, {
                        ...validation,
                        onChange: () => {
                            if (errors[name]) {
                                clearErrors(name);
                            }

                            if (fieldState(name).isTouched || hasSubmitErrorOnce) {
                                debounced();
                            }
                        },
                    })}
                    aria-label={placeholder}
                    aria-describedby={`${name}_message`}
                    aria-invalid={errors[name] ? true : false}
                />
                <div
                    className={`${
                        errors[name] ? "block" : "hidden"
                    } h-full w-14 lg:w-20 rounded-md bg-[url('./assets/icon-error.svg')] bg-no-repeat bg-center bg-[length:1.5rem] bg-transparent absolute top-0 right-0`}
                ></div>
            </div>

            <div id={`${name}_message`} aria-live="polite">
                {errors[name] && (
                    <p className="pt-2 text-xs leading-1.2 text-right italic text-red">
                        {errors[name].message}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Input;
