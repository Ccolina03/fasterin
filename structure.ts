//show if we have a post 

//pass al this to desktTool in sanity.config
import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'
// ...all other list items

export const getDefaultDocumentNode: DefaultDocumentNodeResolver=(
     S, {schemaType}
        ) => {
        if (schemaType === 'post') {
            return S.document().views([
                S.view.form(),  //Is the form from studio
        S.view
        .component(Iframe)
        .options({
            url: `${
                process.env.NEXT_PUBLIC_VERCER_URL || 'http://localhost:3000'
            } /api/preview` ,

            defaultSize: `desktop`,
            reload: {
                button:true
            },
            atttributes: {},

        }).title("Preview")
            ]);
    }
}
