interface CommentSnippet {
    authorChannelId?: string;
    authorChannelUrl?: string;
    authorDisplayName?: string;
    authorProfileImageUrl?: string;
    canRate?: boolean;
    channelId?: string;
    likeCount?: number;
    moderationStatus?: string;
    parentId?: string;
    publishedAt?: string;
    textDisplay?: string;
    textOriginal?: string;
    updatedAt?: string;
    videoId?: string;
    viewerRating?: string;
}

interface Comment {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: CommentSnippet;
}

export type Props =  {
    comments?: Array<Comment>;
};

export type State =  {
    comments?: Array<Comment>;
};