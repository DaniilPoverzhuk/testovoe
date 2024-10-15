import type { IUserRequest } from '@/types';
import { Card, CardContent, Typography } from '@mui/material';

export const UserRequestItem = ({ email, photo, name, comment }: IUserRequest) => {
    const commentText = comment ? `Комментарий: ${comment}` : 'Нет комментария';
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="subtitle2">Почта: {email}</Typography>
                <img src={photo} alt="photo-request" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px' }} />
                <Typography variant="caption">{commentText}</Typography>
            </CardContent>
        </Card>
    );
};
