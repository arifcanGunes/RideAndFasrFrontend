import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiSteeringFill } from 'react-icons/ri';

const formSchema = z.object({
    email: z.string()
        .email({ message: "Geçerli bir email adresi giriniz" }),

    password: z.string()
        .min(6, { message: "Şifre en az 6 karakter olmalıdır" })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
            message: "Şifre en az bir büyük, bir küçük harf ve bir rakam içermelidir"
        }),
})

type FormSchemaType = z.infer<typeof formSchema>;

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema)
    });


    const onSubmit = async (data: FormSchemaType) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form Verisi:', data);
            reset();
        } catch (error) {
            console.error('Gönderim hatası:', error);
        }
    };

    return (
        <div className='flex flex-col gap-7 items-center justify-center w-screen h-screen -translate-y-[15%]'>
            <div className='flex flex-col items-center gap-1'>
                <RiSteeringFill className='w-8 h-8' />
                <h2 className='text-3xl'>Ride<span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>&Fast</span></h2>
            </div>
            <div className="w-[90%] max-w-[500px] px-7 py-5 border border-gray-500 rounded-lg shadow-gray-600 shadow-md">
                <h1 className='text-center text-2xl pb-3'>Giriş Yap</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            {...register('email')}
                            className="w-full p-2 border rounded-md"
                            placeholder="ornek@email.com"
                            autoComplete='off'
                        />
                        {errors.email && (
                            <div>
                                {errors.email?.message}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Şifre
                        </label>
                        <input
                            type="password"
                            {...register('password')}
                            className="w-full p-2 border rounded-md"
                            placeholder="********"
                        />
                        {errors.password && (
                            <div>
                                {errors.password.message}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                    >
                        {isSubmitting ? 'Gönderiliyor...' : 'Kayıt Ol'}
                    </button>
                </form>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm text-gray-600'>Hesabınız yok mu?</p>
                <a href="/signUp" className='text-sm'> Kayıt Ol</a>

            </div>
        </div>
    );
};

export default Login;