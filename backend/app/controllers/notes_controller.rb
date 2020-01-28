class NotesController < ApplicationController
  def create
    note = Note.create(note_params)
    render json: note
  end

  def index
    notes = Note.all
    render json: notes
  end 

  private

  def note_params
    params.require(:note).permit(:content, :timestamp, :dog_id)
  end
end
