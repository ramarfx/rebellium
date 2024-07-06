export interface Kasus  {
    title: string,
    description: string,
    image: string,
    button: {
        label: string,
        image: string
    }
}

export const kasusList: Kasus[] = [
    {
        title: 'Membedah Tawuran Remaja',
        description: `Masyarakat merasa resah dengan fenomena tawuran remaja.
                        Menurut KPAI, tawuran remaja marak terjadi sejak Januari
                        hingga Juni 2022, khususnya setelah Pembelajaran Tatap
                        Muka (PTM) dilanjutkan. Data BPS menunjukkan bahwa
                        tawuran remaja terjadi di 0,22% desa/kelurahan di
                        Indonesia pada 2021. Untuk mencegahnya, penting untuk
                        meningkatkan pendidikan karakter dan kualitas hidup
                        remaja, serta peran aktif orang tua, sekolah, dan
                        pemerintah dalam memberikan pemahaman tentang dampak
                        negatif tawuran.`,
        image: ''
    }
]