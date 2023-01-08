import { redirect } from "@remix-run/node";
import { getStoredNotes, storeNotes } from "~/data/notes";

export default function notes() {
    return (
        <main>
            <newNote />
        </main>
    );
}

export async function action({request}){
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    return redirect('/notes');

}

  export function links () {
    return [{ rel: 'stylesheet', href: 'newNoteStyles'}];
  }