
export const PARAMS: OAuthParam = {
    grant_type_passwd: 'password',
    grant_type_refresh: 'refresh_token',
    client_id: '88ddce4c-062f-4e16-903e-611ac289cbdc',
    client_secret: 'h3RNxb5Wc9R8DIN',
    username: '',
    password: '',
    refresh_token: '',
};

export interface OAuthParam {
    grant_type_passwd: string;
    grant_type_refresh: string;
    client_id: string;
    client_secret: string;
    username: string;
    password: string;
    refresh_token: string;
}