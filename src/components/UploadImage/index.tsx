import { type Schema } from '@/app/page';
import { type ChangeEvent } from 'react';
import { type Control, Controller } from 'react-hook-form';
import { Box, Typography, FormHelperText, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface Props {
    control: Control<Schema>;
    error: boolean;
    helperText?: string;
}

export const UploadImage = ({ control, error, helperText }: Props) => {
    return (
        <Controller
            name="photo"
            control={control}
            render={({ field: { value, onChange } }) => {
                const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
                    onChange(event.target.files?.item(0));
                };

                return (
                    <Box>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Button component="label" variant="contained" sx={{ whiteSpace: 'nowrap' }} startIcon={<CloudUploadIcon />}>
                                Загрузить фото
                                <input type="file" style={{ display: 'none' }} onChange={uploadImage} />
                            </Button>
                            {value && (
                                <Typography whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden" marginRight={4}>
                                    {value.name}
                                </Typography>
                            )}
                        </Box>
                        <FormHelperText sx={{ marginTop: '5px' }} error={error}>
                            {helperText}
                        </FormHelperText>
                    </Box>
                );
            }}
        />
    );
};
