const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

if (!CLOUD_NAME || !UPLOAD_PRESET) {
    console.warn('⚠️ Configuração do Cloudinary:', {
        cloud_name: CLOUD_NAME || '✗ não definido',
        upload_preset: UPLOAD_PRESET || '✗ não definido'
    });
}

export async function uploadImage(file) {
    if (!file) throw new Error('Nenhum arquivo selecionado');
    
    try {
        console.log('📤 Iniciando upload...', {
            cloud_name: CLOUD_NAME,
            fileType: file.type,
            fileSize: `${(file.size / 1024 / 1024).toFixed(2)}MB`
        });

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);
        formData.append('folder', 'caperlet');

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
            {
                method: 'POST',
                body: formData
            }
        );

        if (!response.ok) {
            const errorData = await response.text();
            console.error('❌ Erro do Cloudinary:', {
                status: response.status,
                statusText: response.statusText,
                error: errorData
            });
            throw new Error('Falha ao fazer upload da imagem');
        }

        const data = await response.json();
        console.log('✅ Upload concluído:', {
            url: data.secure_url,
            size: data.bytes,
            format: data.format
        });

        return data.secure_url;
    } catch (error) {
        console.error('❌ Erro detalhado:', error);
        throw error;
    }
}