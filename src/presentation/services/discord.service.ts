import { envs } from "../../config";

export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;
    constructor(
    ) {}

    async notify( message: string ) {
        
        const body = {
            content: message,
            //! This is a image that how to embed images in the response in Discord
            // embeds: [
            //     {
            //         image: { url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN212cmozMGVsbnp0dTU0cHV1bWQ5ZHk1YXBpenRjOTJxMG03MzJsNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d9RbxjZ8QXesiYoerE/giphy.gif'}
            //     }
            // ]
        }

        const resp = await fetch( this.discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        })

        if ( resp.ok ) {
            console.log( ' Error sending message to Discord');
            return false;
        }

        return true;
    }
}