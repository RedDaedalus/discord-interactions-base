import { Snowflake } from "discord-api-types/globals";

declare global {
    const publicKey: string;
    const token: string;
    const ROLES: KVNamespace;
}

declare module "discord-api-types/v8" {
    export const enum ComponentType {
        ComponentRow = 1,
        Button = 2
        // Select = 3
    }

    export type APIComponent = 
        | APIComponentRow
        | APIButton;

    export interface APIComponentRow {
        type: ComponentType.ComponentRow;
        components: APIComponent[];
    }

    export interface APIButton {
        type: ComponentType.Button;
        custom_id?: string;
        style: ButtonStyle;
        emoji?: APIComponentEmoji;
        url?: string;
        disabled?: boolean;
        label?: string;
    }

    export const enum ButtonStyle {
        Primary = 1,
        Secondary = 2,
        Success = 3,
        Danger = 4,
        Link = 5
    }

    export interface APIComponentEmoji {
        id?: Snowflake;
        name?: string;
        animted?: boolean;
    }
}

export {}
