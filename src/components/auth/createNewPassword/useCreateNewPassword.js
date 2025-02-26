import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
const createNewPasswordSchema = z.object({
    password: z.string().min(3),
});
export const useCreateNewPassword = () => {
    const { handleSubmit, control, formState: { errors }, } = useForm({
        resolver: zodResolver(createNewPasswordSchema),
        defaultValues: { password: '' },
    });
    return {
        handleSubmit,
        control,
        errors,
    };
};
