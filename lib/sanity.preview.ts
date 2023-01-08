//seting up preview mode

import {definePreview} from "next-sanity/preview";
import {dataset, projectId} from './sanity.client';

function onPublicAccessOnly() {
    throw new Error("Unable to load preview. You are not logged in.")
}

if (!projectId || !dataset ) {
    throw new Error("Missing ProjectId or Dataset. Checkout your sanity.json");
}

//usePreview hook do to queries to endpoint (get info)

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly
})

//do queries unpublished/published later