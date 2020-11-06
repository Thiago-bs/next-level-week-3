import Orphanage from '../models/Orphanage'
import ImageView from './images_view'

export default {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            open_on_weekends: orphanage.open_on_weekends,
            opening_hours: orphanage.opening_hours,
            images: ImageView.renderMany(orphanage.images),
        };
    },
    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }
}