```
.venv\Scripts\activate.bat
pip
>python -c "import torch; print('CUDA enabled:', torch.cuda.is_available());" 
```8


# WhisperX

## Install Windows

Install Cuda from nVidia

[CUDA Toolkit 12.8 Update 1 Downloads \| NVIDIA Developer](https://developer.nvidia.com/cuda-12-8-1-download-archive?target_os=Windows&target_arch=x86_64&target_version=11&target_type=exe_local)

Create python env

```
python -m venv .venv
```

Install whisperX

[GitHub - m-bain/whisperX: WhisperX: Automatic Speech Recognition with Word-level Timestamps (& Diarization)](https://github.com/m-bain/whisperX)

>>>>>>1

Install PyTorch 2.8.0 cuda

[Get Started](https://pytorch.org/get-started/locally/)

```
pip install torch==2.8.0 torchvision --index-url https://download.pytorch.org/whl/cu128
```

Patch .venv\Lib\site-packages\whisperx\audio.py  
Add path to ffmpeg

```python
    ffmpeg_dir = r'C:\Program Portable\ffmpeg-8.0.1-full_build\bin'
    os.environ["PATH"] += os.pathsep + ffmpeg_dir
```

Set  TORCH_FORCE_NO_WEIGHTS_ONLY_LOAD=true

```
set TORCH_FORCE_NO_WEIGHTS_ONLY_LOAD=true
```

Run with args :
- compute type: float16
- device: cuda

```
whisperx --model large-v2 --language fr --compute_type float16 --device cuda Tests\Hypnose_groupe.wav
```