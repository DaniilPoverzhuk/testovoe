'use client';

import { CSSProperties, useEffect, useState } from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

import { instance } from '@/axios';

import { UserRequestItem } from '@/components/UserRequestItem';

import type { IUserRequest } from '@/types';

interface IResponse {
    status: string;
    data: IUserRequest[];
}

const margin: CSSProperties = { marginTop: '-5vh' };
const warningStyles: CSSProperties = { fontSize: '20px', ...margin };

export const UserRequestList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [usersRequest, setUsersRequest] = useState<IUserRequest[]>([]);

    const fetchUsersRequest = async () => {
        setIsLoading(true);

        try {
            const response = await instance<IResponse>('/api/data');

            if (response.status === 200) {
                setUsersRequest(response.data.data);
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const content = () => {
        if (isLoading)
            return (
                <Box sx={margin}>
                    <CircularProgress />
                </Box>
            );

        if (isError) return <Typography sx={warningStyles}>При получении заявок произошла ошибка 😢</Typography>;

        if (!usersRequest.length) return <Typography sx={warningStyles}>Список заявок пуст 😢</Typography>;

        return (
            <Box height={'100%'} display="flex" flexDirection="column" gap={3} width="450px">
                {usersRequest.map((userRequest) => (
                    <UserRequestItem key={userRequest.id} {...userRequest} />
                ))}
            </Box>
        );
    };

    useEffect(() => {
        fetchUsersRequest();
    }, []);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
            {content()}
        </Box>
    );
};
