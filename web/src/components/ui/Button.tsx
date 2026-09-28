import { useFormStatus } from "react-dom";


type FormButtonParam = {
    isSubmittingText: string,
    isNotSubmittingText: string,
}


export default function FormSubmissionButton( buttonTextParam  : FormButtonParam) {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className="btn-primary w-full">
            {pending ? buttonTextParam.isSubmittingText : buttonTextParam.isNotSubmittingText }
        </button>
    );
}