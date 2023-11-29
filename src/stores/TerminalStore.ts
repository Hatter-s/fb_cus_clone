import { defineStore } from 'pinia';



export const useTerminalStore = defineStore('terminal', {
    state: () => ({
        isOpen: false as boolean,
        content: [`Quis ex quis id est cupidatat voluptate.
        <br/>
        Occaecat dolore incididunt commodo irure elit excepteur
        <br/>
        occaecat duis laborum id culpa.
        <br>
        Commodo ut cupidatat voluptate minim in sunt ullamco qui. Deserunt velit sint 
        <br/>
        ipsum sunt esse ad dolor in adipisicing veniam est. Est tempor commodo tempor id qui. Laboris ipsum reprehenderit in exercitation. Magna culpa ullamco duis cillum ea sunt cillum qui quis minim. Proident et deserunt et reprehenderit laboris. Eiusmod eu nisi culpa do exercitation aliqua eiusmod consequat. Aliquip magna duis Lorem reprehenderit aliqua ad do sint ipsum dolor. Veniam enim ex minim ad eiusmod occaecat minim Lorem enim reprehenderit est elit fugiat culpa. Excepteur anim sit consectetur consequat. Quis officia labore ad proident incididunt veniam voluptate ea. Sint cillum eiusmod commodo irure non ut. Aute non sunt minim incididunt. Pariatur tempor ut aliqua laboris dolore elit magna consequat reprehenderit non sint voluptate occaecat excepteur. Sit aute aliqua labore voluptate nulla ea quis minim culpa sit fugiat non. In fugiat anim veniam do amet consequat in. Ad pariatur commodo anim proident fugiat excepteur. In occaecat amet occaecat voluptate exercitation labore consequat irure exercitation enim. Duis labore duis et nulla occaecat duis culpa irure aute. Labore in adipisicing exercitation cupidatat nisi exercitation deserunt et ullamco. Anim aute magna magna enim tempor velit laborum sunt sit nulla nostrud deserunt nostrud.Veniam enim ex minim ad eiusmod occaecat minim Lorem enim reprehenderit est elit fugiat culpa. Excepteur anim sit consectetur consequat. Quis officia labore ad proident incididunt veniam voluptate ea. Sint cillum eiusmod commodo irure non ut. Aute non sunt minim incididunt.`] as string[],
    }),

    actions: {
        toggleOpenStatus() {
            this.isOpen = !this.isOpen;
        },
        addContent(text: string) {
            const lastContentIndex: number = this.content.length - 1;
            this.content[lastContentIndex] = this.content[lastContentIndex].concat(' ' + text);
        },
        makeContent() {
            this.content = this.content
        }
    },

    getters: {

    }
});