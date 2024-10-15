'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, TextField, Box, Alert } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '@mui/lab/LoadingButton';

import { instance } from '@/axios';

import { UploadImage } from '@/components/UploadImage';
import { useState } from 'react';
import Link from 'next/link';

const IMAGES_TYPE = ['image/jpeg', 'image/png', 'image/jpg'];

const schema = z.object({
    name: z.string().min(1, 'Обязательное поле'),
    email: z.string().email('Неверный формат почты'),
    comment: z.string().optional(),
    photo: z.instanceof(File, { message: 'Загрузка фото обязательна' }).refine((file) => IMAGES_TYPE.includes(file.type), 'Фомарт файла должен быть jpeg, png или jpg'),
});

export type Schema = z.infer<typeof schema>;

type RequestStatus = 'success' | 'failed' | 'loading' | '';

const Page = () => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Schema>({ resolver: zodResolver(schema) });
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('');

    const onSubmit: SubmitHandler<Schema> = async (data) => {
        setRequestStatus('loading');

        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });

            await instance.post('/api', formData);

            setRequestStatus('success');
            reset();
        } catch (error) {
            setRequestStatus('failed');
        }
    };

    return (
        <Box display="flex" flexDirection="column" gap={2} width={'100%'} maxWidth={450} component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('name')} error={!!errors?.name} helperText={errors?.name?.message} label="Имя" fullWidth />
            <TextField {...register('email')} error={!!errors?.email} helperText={errors?.email?.message} label="Почта" fullWidth />
            <TextField {...register('comment')} error={!!errors?.comment} helperText={errors?.comment?.message} label="Комментарий" multiline rows={4} fullWidth />
            <UploadImage control={control} error={!!errors?.photo} helperText={errors?.photo?.message} />
            <LoadingButton loading={requestStatus === 'loading'} type="submit" variant="contained" color="primary" size="large">
                Отправить
            </LoadingButton>
            {requestStatus === 'success' && <Alert severity="success">Заявка успешно отправлена</Alert>}
            {requestStatus === 'failed' && <Alert severity="error">При отправке заявки что то пошло не так</Alert>}
            <Link href={'/list'} style={{ textAlign: 'center', marginTop: '50px', textDecoration: 'none', color: '#1565c0' }}>
                Перейти к списку заявок
            </Link>
        </Box>
    );
};

export default Page;
