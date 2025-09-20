"use client"
import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const NewsLetterFormV3 = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Subscribe")
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete="off" required />
                <button type="submit">Get free trial</button>
            </form>
        </>
    );
};

export default NewsLetterFormV3;