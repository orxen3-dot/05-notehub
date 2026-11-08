import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const API_URL = "https://notehub-public.goit.study/api";
const API_TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
    },
});

interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

interface FetchNotesParams {
    page: number;
    perPage: number;
    search?: string;
}

export async function fetchNotes({
    page,
    perPage,
    search,
}: FetchNotesParams): Promise<FetchNotesResponse> {
    const response = await api.get<FetchNotesResponse>("/notes", {
        params: { page, perPage, search },
    });
    return response.data;
}

interface CreateNoteParams {
    title: string;
    content: string;
    tag: NoteTag;
}

export async function createNote(noteData: CreateNoteParams): Promise<Note> {
    const response = await api.post<Note>("/notes", noteData);
    return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
    const response = await api.delete<Note>(`/notes/${id}`);
    return response.data;
}