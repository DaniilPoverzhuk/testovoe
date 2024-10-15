import { Box, Typography } from '@mui/material';

import { UserRequestList } from '@/components/UserRequestList';

const Page = () => {
    return (
        <Box display="flex" flexDirection="column" height={'100vh'} paddingTop={'5vh'}>
            <Typography fontSize="30px" color="primary">
                Список отправленных заявок
            </Typography>
            <UserRequestList />
        </Box>
    );
};

export default Page;
