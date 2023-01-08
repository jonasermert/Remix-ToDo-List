
function newNote() {
    return (
        <form method="post" id="note-form">
            <p>
                <label htmlFor="title">
                    Title
                </label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" rows="5" required />
            </p>
            <div className="form-actions">
                <button>Add note</button>
            </div>
        </form>
    )
}

export default newNote;

export function links () {
    return [{ rel: 'stylesheet', href: 'newNoteStyles'}];
  }