import { FormProps } from "./FormProps";

export default function Form({ template, btnText = 'Submit', handler }: FormProps) {
    return (
        <form action={handler} className="max-w-xl mx-auto bg-white padding-20 rounded-2xl shadow-lg space-y-8 d-flex f-direction-column gap-10">
            {template.map(field => field)}

            <button
                type="submit"
                className="button w-full bg-[#907731] hover:bg-[#7a6427] text-white font-semibold py-3 rounded-lg transition duration-200"
            >
                {btnText}
            </button>
        </form>
    );
}