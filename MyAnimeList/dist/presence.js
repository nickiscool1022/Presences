var presence = new Presence({
    clientId: "468420510632509473"
});
presence.on("UpdateData", async () => {
    if (document.location.pathname == "/") {
        const presenceData = {
            details: "Viewing the homepage",
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname == "/anime.php" ||
        document.location.pathname.startsWith("/topanime") ||
        document.location.pathname.startsWith("/watch")) {
        const presenceData = {
            details: "Looking for anime",
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname == "/manga.php" ||
        document.location.pathname.startsWith("/topmanga") ||
        document.location.pathname.startsWith("/store")) {
        const presenceData = {
            details: "Looking for manga",
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.startsWith("/forum")) {
        const presenceData = {
            details: "Viewing the forums",
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.startsWith("/users.php")) {
        const presenceData = {
            details: "Searching for users",
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.startsWith("/profile")) {
        const presenceData = {
            details: "Viewing a profile",
            state: document.location.pathname.split("/")[2],
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.startsWith("/animelist")) {
        const presenceData = {
            details: "Viewing an anime list",
            state: document.location.pathname.split("/")[2],
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.startsWith("/mangalist")) {
        const presenceData = {
            details: "Viewing a manga list",
            state: document.location.pathname.split("/")[2],
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.startsWith("/anime")) {
        if (document.getElementsByClassName("js-anime-edit-info-button")[0]) {
            const presenceData = {
                details: "Viewing an anime",
                state: document.getElementsByClassName("header-right")[0].parentNode
                    .childNodes[1].textContent,
                largeImageKey: "lg-mal"
            };
            presence.setActivity(presenceData);
        }
        else {
            const presenceData = {
                details: "Looking for anime",
                largeImageKey: "lg-mal"
            };
            presence.setActivity(presenceData);
        }
    }
    else if (document.location.pathname.startsWith("/manga")) {
        if (document.getElementsByClassName("js-manga-edit-info-button")[0]) {
            const presenceData = {
                details: "Viewing a manga",
                state: document.getElementsByClassName("header-right")[0].parentNode
                    .childNodes[1].textContent,
                largeImageKey: "lg-mal"
            };
            presence.setActivity(presenceData);
        }
        else {
            const presenceData = {
                details: "Looking for manga",
                largeImageKey: "lg-mal"
            };
            presence.setActivity(presenceData);
        }
    }
    else {
        const presenceData = {
            largeImageKey: "lg-mal"
        };
        presence.setActivity(presenceData);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wcmVzZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQztJQUMxQixRQUFRLEVBQUUsb0JBQW9CO0NBQy9CLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ25DLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksR0FBRyxFQUFFO1FBQ3JDLE1BQU0sWUFBWSxHQUFpQjtZQUNqQyxPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLGFBQWEsRUFBRSxRQUFRO1NBQ3hCLENBQUM7UUFDRixRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3BDO1NBQU0sSUFDTCxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxZQUFZO1FBQzFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUMvQztRQUNBLE1BQU0sWUFBWSxHQUFpQjtZQUNqQyxPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLGFBQWEsRUFBRSxRQUFRO1NBQ3hCLENBQUM7UUFDRixRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3BDO1NBQU0sSUFDTCxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxZQUFZO1FBQzFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUMvQztRQUNBLE1BQU0sWUFBWSxHQUFpQjtZQUNqQyxPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLGFB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